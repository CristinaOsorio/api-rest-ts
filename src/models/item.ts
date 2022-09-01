import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../interfaces/car.interface";

const ItemShema = new Schema<Car>(
  {
    color: {
      type: String,
      required: true,
    },
    gas: {
      type: String,
      enum: ['gasoline', 'electric'],
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const ItemModel = model('Car', ItemShema);

export default ItemModel;