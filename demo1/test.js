var assert = require("assert")
describe('Array',function(){
  describe('#indexof()',function(){
    it('当值不存在时应该返回　-1',function(){
	assert.equal(-1,[1,2,3].indexOf(5));
	assert.equal(-1,[1,2,3].indexOf(0));
})
})
})

