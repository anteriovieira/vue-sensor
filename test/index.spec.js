import { mount, createLocalVue } from '@vue/test-utils'
import VueSensor from '../src'

import RawComponent from './stubs/RawComponent'

describe('implement sensor', () => {
  test('track view', () => {
    const localVue = createLocalVue()

    localVue.use(VueSensor, {
      extensions: []
    })

    const wrapper = mount(RawComponent, { localVue })
    expect(typeof wrapper.vm.$sensor).toBe('object')
  })
})
