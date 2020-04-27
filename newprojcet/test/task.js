let chai = require('chai'),
    chaiHttp = require('chai-http')
      server = require('../server');


      //assertion style
      chai.should();
      chai.use(chaiHttp);
      
      describe('Product API' , ()=>{
          describe('Get /product' , (done)=>{
            chai.request(server)
                .get("/product")
                .end((err,resonse)=>{
                     resonse.should.have.status(200);
                     resonse.body.should.be.a('array');
                     done();
                })
          })

      })

   

  

