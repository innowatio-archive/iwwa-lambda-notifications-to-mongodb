import Collection from "lk-collection";
import dotenv from "dotenv";

dotenv.load();

var Notifications = new Collection({
    name: "notifications",
    mongodbUrl: process.env.MONGODB_URL,
    mongodbCollectionName: process.env.MONGODB_COLLECTION_NAME
});

export var handler = Notifications.kinesisToMongodb;
