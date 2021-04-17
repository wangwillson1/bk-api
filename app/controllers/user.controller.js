exports.allAccess = (req, res) => {
    res.status(200).send("Public Content");
};

exports.userBoard = (req, res) => {
    res.status(200).send("User Content");
};

exports.landlordBoard = (req, res) => {
    res.status(200).send("Landlord Content");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content");
};