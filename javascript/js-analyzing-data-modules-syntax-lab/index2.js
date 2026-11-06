require('datejs')

function combineUsers(...args) {
    const combinedObject = {
        users:[],
        merge_date: Date.today().toString("M/d/yyyy")
    }
    args.forEach(item => {
    combinedObject.users.push(...item)
    })
    return combinedObject

}

const result = combineUsers(
    ["alice", "ben"],
  ["chris"],
  ["dana", "erin"]
)

console.log(result)