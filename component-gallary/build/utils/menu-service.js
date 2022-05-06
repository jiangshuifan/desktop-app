const fs = require('fs');
const path = require('path');
const { stat } = require('fs/promises');

class FileApi {
  //数组=>对象
  getObjChild = async (fm, filepath) => {
    try {
      let target = [];
      for (let item of fm) {
        let child;
        let currentPath = path.join(filepath, item);
        let fOrD = await stat(currentPath);
        if (fOrD.isDirectory()) {
          child = {
            isFile: false,
            name: item,
            children: [],
          };
        } else {
          child = {
            isFile: true,
            name: item,
            children: [],
          };
        }
        target.push(child);
      }
      return target;
    } catch (err) {
      console.error(err);
    }
  };
  getDirChild = async (filepath) => {
    let fm = fs.readdirSync(filepath, {
      encoding: 'utf-8',
    });
    let target = await this.getObjChild(fm, filepath);
    return target;
  };
  //得到整个目录
  getAllFileList = async (filepath) => {
    let target = await this.getDirChild(filepath);
    for (let item of target) {
      if (!item.isFile) {
        let currentPath = path.join(filepath, item.name);
        item.children = await this.getAllFileList(currentPath);
      }
    }
    return target;
  };
}

module.exports = new FileApi();
