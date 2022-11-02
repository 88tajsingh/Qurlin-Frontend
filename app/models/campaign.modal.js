const mongoose = require("mongoose");

const Campaign = mongoose.model(
  "Campaign",
  new mongoose.Schema({
    campaign_name: String,
    template_id: String,
    password: String,
    domain: String,
    redirect: String,

    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = Campaign;
