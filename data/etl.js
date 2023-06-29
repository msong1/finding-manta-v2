const fs = require('fs');
const path = require('path');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

function loadJSON(jsonPath, callback) {
  fs.readFile(jsonPath, 'utf8', (error, jsonData) => {
    if (error) {
      callback(error);
      return;
    }

    try {
      const data = JSON.parse(jsonData);
      callback(null, data);
    } catch (error) {
      callback(error);
    }
  });
}

async function convertAndCreateDocument(data) {
  const convertedData = data.slice(0,20).map(entry => ({
    siteID: parseInt(entry.data.properties.id),
    name: entry.data.properties.name,
    description1: entry.data.text.description1,
    description2: entry.data.text.description2,
    imageSrc: entry.data.properties.images.elements[0].detail,
    category: entry.type,
    longitude: entry.data.properties.lng,
    latitude: entry.data.properties.lat,
    country: '', // Add the corresponding property from the original data if available
    region: 'other', // Add the corresponding property from the original data if available
    rating: parseFloat(entry.data.properties.averageRating),
    animalIDs: [], // Add the corresponding property from the original data if available
    loggedDives: parseInt(entry.data.properties.loggedDives),
    loggedUsers: parseInt(entry.data.properties.loggedUsers),
    averageMaxDepth: parseInt(entry.data.properties.averageMaxDepth),
    averageDivetime: parseInt(entry.data.properties.averageDivetime),
    averageVis: parseInt(entry.data.properties.averageVis)
  }));

  // convertedData.forEach(async (entry) => {
  //   try {
  //     const createdDocument = await prisma.diveSite.create({
  //       data: entry,
  //     });

  //     // console.log('New dive site created:');
  //     // console.log(createdDocument);
  //   } catch (error) {
  //     console.error('Error creating dive site:', error);
  //   }
  // });

  try {const diveSites = await prisma.diveSite.createMany({
    data: convertedData,
  })}
  catch (error){
    console.log('Error creating dive site:', error);
  }

}

function processJSON(jsonPath) {
  loadJSON(jsonPath, (error, data) => {
    if (error) {
      console.error('Error loading JSON file:', error);
      return;
    }

  convertAndCreateDocument(data);
  });
}

const jsonPath = path.join(path.resolve(__dirname), '..', 'etc', 'data','diveSiteList.json');
processJSON(jsonPath);