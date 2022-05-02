import mongoose from "mongoose";
import { Model } from "./Database";

export abstract class DataAccessBase<T extends mongoose.Document> {
  private model: Model;
  constructor(model: Model) {
    this.model = model;
  }
}