如何将一个新成员加入到数组中

可以使用（map,filter,concat）

修改文件 app 文件中 Vocher 类

//updatedPassengers is a new array, returned from concat

let updatedPassengers = this.passengers.concat('Mitchell, Vincent M.');

this.setState({ passengers: updatedPassengers });