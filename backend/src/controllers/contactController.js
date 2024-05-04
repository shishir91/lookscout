import contactModel from "../models/contactModel.js";

export default class ContactController {
  async addContact(req, res) {
    try {
      console.log(req.body);
      const response = await contactModel.create({
        ...req.body,
      });
      console.log(response);
      res.json(response);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  }
}
