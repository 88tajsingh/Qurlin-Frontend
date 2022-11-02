exports.allAccess = (req, res) => {
  res.status(200).send("Public Content fdsfs.");
};
exports.createCampaign = (req, res) => {
  const campaign = new Campaign({
    campaign_name: req.body.campaign_name,
    template_id: req.body.template_id,
    domain: req.body.domain,
    redirect: req.body.redirect,
  });

  res.status(200).send({
        campaign_name: req.body.campaign_name,
	    template_id: req.body.template_id,
	    domain: req.body.domain,
	    redirect: req.body.redirect,
        status: '200'
      });
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
