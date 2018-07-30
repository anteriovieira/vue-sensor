import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import VueSensor from '../src'

import RawComponent from './stubs/RawComponent'

describe('implement sensor', () => {
  test('should access the api Sendor', () => {
    const localVue = createLocalVue()

    localVue.use(VueSensor, {
      extensions: []
    })

    const wrapper = shallowMount(RawComponent, { localVue })
    expect(typeof wrapper.vm.$sensor).toBe('object')
  })

  test('should access the sendinblue instance', () => {
    const localVue = createLocalVue()

    localVue.use(VueSensor, {
      extensions: {
        sendinblue: { token: 'abc' }
      }
    })

    expect(typeof window.sendinblue).toBe('object')
  })

  test('track view with router', () => {
    const localVue = createLocalVue()

    localVue.use(VueRouter)
    localVue.use(VueSensor, {
      extensions: []
    })

    const router = new VueRouter()

    const wrapper = shallowMount(RawComponent, { localVue, router })
    expect(typeof wrapper.vm.$sensor).toBe('object')
  })
})
