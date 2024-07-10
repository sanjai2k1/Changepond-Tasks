const axios = require("axios")
const {get,getById,post,deleteById,update}=require("../src/reactApi.app");
const { consoleLog } = require("mocha/lib/reporters/base");
let expect;
(async ()=>{
const chai = await  import ('chai');
expect = chai.expect;
})();

describe("Test suite 1",()=>{
    it('Get Users',()=>{
        return axios.get(get("users")).then(res=>{
            expect(res.data[0].email).to.be.equal('user1')
            expect(res.data[0].id).to.be.equal("1")
    })
    })
   
})

describe("Test suite 2",()=>{
    it('Get User By Id',()=>{
      
        return axios.get(getById("users","1")).then(res=>{
            // console.log(res.data)
            expect(res.data.email).to.be.equal('user1')
            expect(res.data.id).to.be.equal("1")
    })
    })
   
})

describe("Test suite 3",()=>{
    it('Post User',()=>{
        return axios.post(post("users"),{
            "password": "User@2k1",
            "bookedrooms": [],
            "contact": "trainee",
            "name": "user6",
            "username": "user6"
          }).then(res=>{
            expect(res.data.name).to.be.equal('user6')
            
    })
    })
   
})



describe("Test suite 4",()=>{
    it('Delete User By Id',()=>{
      
        return axios.delete(deleteById("users","d804")).then(res=>{
            console.log(res.data)
            expect(res.data.name).to.be.equal('user6')
            expect(res.data.id).to.be.equal("d804")
    })
    })
   
})

describe("Test suite 5",()=>{
    it('Update User By Id',()=>{
      const id="7e5b";
        return axios.put(update("users",id),{
            "password": "User@2k1",
            "bookedrooms": [],
            "contact": "trainee",
            "name": "user6",
            "username": "user6"
          }).then(res=>{
            expect(res.data.name).to.be.equal('user6')
            expect(res.data.id).to.be.equal("7e5b")
    })
    })
   
})