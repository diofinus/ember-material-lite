import Ember from 'ember';
import MdlMiniFooter from './mdl-mini-footer';
import MdlMegaFooter from './mdl-mega-footer';
import BaseChildComponent from './-base-child-component';
import ChildComponentSupport from 'ember-composability/mixins/child-component-support';
import layout from '../templates/components/mdl-footer-linklist';

const { A } = Ember;

export default BaseChildComponent.extend(ChildComponentSupport, {
  _parentComponentTypes: A([MdlMegaFooter, MdlMiniFooter]),
  layout,
  tagName: 'ul',
  childComponentClassName: 'link-list'
});
