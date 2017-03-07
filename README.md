# 管道

管道有pure这个属性，默认为true
pure: true 监测基本类型和引用类型地址的变更，修改对象的属性或array.push不会调用
pure: false 修改对象的属性或array.push会调用(慎用)
