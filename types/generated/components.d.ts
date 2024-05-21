import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    heading: Attribute.String;
    subHeading: Attribute.String;
    image: Attribute.Media;
  };
}

export interface ElementsItem extends Schema.Component {
  collectionName: 'components_elements_items';
  info: {
    displayName: 'Item';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    text: Attribute.Text;
    icon: Attribute.Enumeration<['CHECK']>;
  };
}

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

export interface LayoutCardQuote extends Schema.Component {
  collectionName: 'components_layout_card_quotes';
  info: {
    displayName: 'Card Quote';
    description: '';
  };
  attributes: {
    card: Attribute.Component<'elements.card', true>;
  };
}

export interface LayoutContentImage extends Schema.Component {
  collectionName: 'components_layout_content_images';
  info: {
    displayName: 'Content Image';
  };
  attributes: {
    heading: Attribute.String;
    text: Attribute.Text;
    image: Attribute.Media;
    imageRight: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface LayoutContentItems extends Schema.Component {
  collectionName: 'components_layout_content_items';
  info: {
    displayName: 'Content Items';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    text: Attribute.Text;
    image: Attribute.Media;
    item: Attribute.Component<'elements.item', true>;
    imageRight: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface LayoutCta extends Schema.Component {
  collectionName: 'components_layout_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    heading: Attribute.String;
    subHeading: Attribute.Text;
    cta: Attribute.Component<'elements.link'>;
  };
}

export interface LayoutFaQs extends Schema.Component {
  collectionName: 'components_layout_fa_qs';
  info: {
    displayName: 'FAQs';
  };
  attributes: {
    questions: Attribute.Relation<
      'layout.fa-qs',
      'oneToMany',
      'api::question.question'
    >;
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

export interface LayoutYtVideo extends Schema.Component {
  collectionName: 'components_layout_yt_videos';
  info: {
    displayName: 'YT Video';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    videoId: Attribute.String;
    videoUrl: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.card': ElementsCard;
      'elements.item': ElementsItem;
      'elements.link': ElementsLink;
      'elements.logo-link': ElementsLogoLink;
      'layout.card-quote': LayoutCardQuote;
      'layout.content-image': LayoutContentImage;
      'layout.content-items': LayoutContentItems;
      'layout.cta': LayoutCta;
      'layout.fa-qs': LayoutFaQs;
      'layout.hero': LayoutHero;
      'layout.section-heading': LayoutSectionHeading;
      'layout.top-nav': LayoutTopNav;
      'layout.yt-video': LayoutYtVideo;
    }
  }
}
