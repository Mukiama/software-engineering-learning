
function combineUsers(...args) {
  const combinedObject = {
    users: [],
    merge_date: "4/3/2026"
  };
 args.forEach(item => {
  if(Array.isArray(item)) {
    combinedObject.users.push(...item);
  
  } else if(item && typeof item === 'object') {
    combinedObject.users.push(item);
  }
 });
 return combinedObject;
};

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
