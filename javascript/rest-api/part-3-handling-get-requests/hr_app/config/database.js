module.exports = {
  hrPool: {
    user: process.env.HR_USER || "DASHBOARD",
    password: process.env.HR_PASSWORD || "lolo23",
    connectString: process.env.HR_CONNECTIONSTRING || "localhost:1521/xe",
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0
  }
};

