import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
	// 参数if是自己乱加的
	it('renders props.msg when passed', () => {
		const msg = 'new message';
		const wrapper = shallowMount(HelloWorld, {
			propsData: { msg }
		});
		expect(wrapper.text()).to.include(msg);
	});
});
