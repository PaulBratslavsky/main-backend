import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsLink extends Schema.Component {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Attribute.String;
    text: Attribute.String;
    external: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ElementsLogoLink extends Schema.Component {
  collectionName: 'components_elements_logo_links';
  info: {
    displayName: 'Logo Link';
  };
  attributes: {
    image: Attribute.Media;
    text: Attribute.String;
  };
}

export interface LayoutHero extends Schema.Component {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    heading: Attribute.String;
    text: Attribute.Text;
    cta: Attribute.Component<'elements.link'>;
    image: Attribute.Media;
  };
}

export interface LayoutSectionHeading extends Schema.Component {
  collectionName: 'components_layout_section_headings';
  info: {
    displayName: 'Section Heading';
  };
  attributes: {
    preHeading: Attribute.String;
    heading: Attribute.String;
    text: Attribute.Text;
  };
}

export interface LayoutTopNav extends Schema.Component {
  collectionName: 'components_layout_top_navs';
  info: {
    displayName: 'Top Nav';
    description: '';
  };
  attributes: {
    logoLink: Attribute.Component<'elements.logo-link'>;
    link: Attribute.Component<'elements.link', true>;
    cta: Attribute.Component<'elements.link'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.link': ElementsLink;
      'elements.logo-link': ElementsLogoLink;
      'layout.hero': LayoutHero;
      'layout.section-heading': LayoutSectionHeading;
      'layout.top-nav': LayoutTopNav;
    }
  }
}
