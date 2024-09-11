const Dealer = require("../models/dealer.model");

const getDealers = async (req, res) => {
  try {
    const dealers = await Dealer.find({});
    res.status(200).json(dealers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDealer = async (req, res) => {
  try {
    const { id } = req.params;
    const dealer = await Dealer.findById(id);
    res.status(200).json(dealer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createDealer = async (req, res) => {
  try {
    const dealer = await Dealer.create(req.body);
    res.status(200).json(dealer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateDealer = async (req, res) => {
  try {
    const { id } = req.params;

    const dealer = await Dealer.findByIdAndUpdate(id, req.body);

    if (!dealer) {
      return res.status(404).json({ message: "Dealer not found" });
    }

    const updatedDealer = await Dealer.findById(id);
    res.status(200).json(updatedDealer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteDealer = async (req, res) => {
  try {
    const { id } = req.params;

    const dealer = await Dealer.findByIdAndDelete(id);

    if (!dealer) {
      return res.status(404).json({ message: "Dealer not found" });
    }

    res.status(200).json({ message: "Dealer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getDealers,
  getDealer,
  createDealer,
  updateDealer,
  deleteDealer,
};
