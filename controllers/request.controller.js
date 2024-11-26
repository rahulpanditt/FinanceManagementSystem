const Request = require("../models/request.model");
exports.updateRequest = async (req, res) => {
  const { mobile, service, type, remarks } = req.body;
  try {
    const updatedRequest = await Request.findOneAndUpdate(
      { mobile },
      { service, type, remarks },
      { new: true }
    );
    if (!updatedRequest) {
      return res.status(404).json({ message: "Request not found" });
    }
    res
      .status(200)
      .json({ message: "Request updated successfully", updatedRequest });
  } catch (error) {
    res.status(500).json({ message: "Error updating request", error });
  }
};

exports.deleteRequest = async (req, res) => {
  const { mobile } = req.body;

  try {
    const deletedRequest = await Request.findOneAndDelete({ mobile });

    if (!deletedRequest) {
      return res.status(404).json({ message: "Request not found" });
    }

    res
      .status(200)
      .json({ message: "Request deleted successfully", deletedRequest });
  } catch (error) {
    res.status(500).json({ message: "Error deleting request", error });
  }
};
