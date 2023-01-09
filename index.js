const fs = require("fs");

const replaceThis = "read";
const replaceWith = "write";

try {
  const data = fs.readdir("data", (err, data) => {
    console.log(data);
    for (let index = 0; index < data.length; index++) {
      const item = data[index];

      let newFile = "data/" + item.replaceAll(replaceThis, replaceWith);
      fs.rename("data/" + item, newFile, () => {
        console.log("Rename Success");
      });
    }
  });
  console.log(data);
} catch (err) {
  console.error(err);
}
