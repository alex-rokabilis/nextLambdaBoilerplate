const path = require("path");
const AWS = require("aws-sdk");
const s3 = new AWS.S3();
const got = require('got');


const delay = ms => new Promise(resolve => setTimeout(() => resolve(), ms));

exports.handler = async function (event, context, callback) {
  
  let bucketItems = (await s3.listObjectsV2({
    Bucket: "dmdemowebsite"
  }).promise()).Contents;

  const catalog = (await got('https://catalog.deliverymanager.gr/867391/catalog.json')).catalog;

  console.log(bucketItems,catalog)

  await delay(1000);
  console.log("hi!");
  await delay(1000);
  console.log("bye");
};