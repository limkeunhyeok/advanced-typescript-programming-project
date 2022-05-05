import mongoose from "mongoose";
import { Model } from "../Types";

export abstract class DataAccessBase<T extends mongoose.Document> {
  private model: Model;
  protected constructor(model: Model) {
    this.model = model;
  }

  
}