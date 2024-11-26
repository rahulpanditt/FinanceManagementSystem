const Member = require('../models/member.model');

exports.registerMember = async (req, res) => {
  const { mobile, email, occupation, createpassword } = req.body;

  try {
    const newMember = new Member({ mobile, email, occupation, createpassword });
    await newMember.save();
    res.status(201).json({ message: 'Member registered successfully', newMember });
  } catch (error) {
    res.status(500).json({ message: 'Error registering member', error });
  }
};

exports.updatePassword = async (req, res) => {
  const { mobile, password } = req.body;

  try {
    const updatedMember = await Member.findOneAndUpdate(
      { mobile },
      { createpassword: password },
      { new: true }
    );

    if (!updatedMember) {
      return res.status(404).json({ message: 'Member not found' });
    }

    res.status(200).json({ message: 'Password updated successfully', updatedMember });
  } catch (error) {
    res.status(500).json({ message: 'Error updating password', error });
  }
};
exports.cancelMembership = async (req, res) => {
  const { mobile } = req.body;

  try {
    const deletedMember = await Member.findOneAndDelete({ mobile });

    if (!deletedMember) {
      return res.status(404).json({ message: 'Member not found' });
    }
    res.status(200).json({ message: 'Membership canceled successfully', deletedMember });
  } catch (error) {
    res.status(500).json({ message: 'Error canceling membership', error });
  }
};
