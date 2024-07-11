import React from 'react';
import {
  FONT_WEIGHT,
  FONT_STYLE,
  TextAlign,
  TypographyVariant,
  OVERFLOW_WRAP,
  DISPLAY,
  BackgroundColor,
  Color as ColorEnum,
  TextColor,
  BorderColor,
  SEVERITIES,
} from '../../../helpers/constants/design-system';
import Box from '../box';

import { BannerAlert } from '../../component-library/banner-alert';

import { Text } from '../../component-library/text';
import { ValidColors, ValidTags } from './typography';

import README from './README.mdx';

const sizeKnobOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const marginSizeKnobOptions = [...sizeKnobOptions, 'auto'];

export default {
  title: 'Components/UI/Typography',

  parameters: {
    docs: {
      page: README,
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.values(TypographyVariant),
    },
    color: {
      control: { type: 'select' },
      options: ValidColors,
    },
    fontWeight: {
      control: { type: 'select' },
      options: Object.values(FONT_WEIGHT),
    },
    fontStyle: {
      control: { type: 'select' },
      options: Object.values(FONT_STYLE),
    },
    align: {
      control: { type: 'select' },
      options: Object.values(TextAlign),
    },
    overflowWrap: {
      control: { type: 'select' },
      options: Object.values(OVERFLOW_WRAP),
    },
    as: {
      control: { type: 'select' },
      options: ValidTags,
    },
    margin: {
      options: marginSizeKnobOptions,
      control: 'select',
    },
    boxProps: {
      control: 'object',
    },
    className: {
      control: { type: 'text' },
    },
    children: {
      control: { type: 'text' },
    },
  },
};

function renderBackgroundColor(color) {
  let bgColor;
  switch (color) {
    case ColorEnum.overlayInverse:
      bgColor = BackgroundColor.overlayDefault;
      break;
    case ColorEnum.primaryInverse:
      bgColor = BackgroundColor.primaryDefault;
      break;
    case ColorEnum.errorInverse:
      bgColor = BackgroundColor.errorDefault;
      break;
    case ColorEnum.warningInverse:
      bgColor = BackgroundColor.warningDefault;
      break;
    case ColorEnum.successInverse:
      bgColor = BackgroundColor.successDefault;
      break;
    case ColorEnum.infoInverse:
      bgColor = BackgroundColor.infoDefault;
      break;
    default:
      bgColor = null;
      break;
  }

  return bgColor;
}

export const DefaultStory = (args) => (
  <>
    <BannerAlert
      severity={SEVERITIES.WARNING}
      title="Deprecated"
      description="<Typography/> has been deprecated in favor of the <Text /> component"
      actionButtonLabel="See details"
      actionButtonProps={{
        href: 'https://github.com/MetaMask/metamask-extension/issues/17670',
      }}
    />
    <Text
      backgroundColor={renderBackgroundColor(args.color)}
      {...args}
    >
      {args.children}
    </Text>
  </>
);

DefaultStory.storyName = 'Default';

DefaultStory.args = {
  children: 'The quick orange fox jumped over the lazy dog.',
};

export const Variant = (args) => (
  <>
    <BannerAlert
      severity={SEVERITIES.WARNING}
      title="Deprecated"
      description="<Typography/> has been deprecated in favor of the <Text /> component"
      actionButtonLabel="See details"
      actionButtonProps={{
        href: 'https://github.com/MetaMask/metamask-extension/issues/17670',
      }}
    />
    {Object.values(TypographyVariant).map((variant) => (
      <Text
        backgroundColor={renderBackgroundColor(args.color)}
        {...args}
        variant={variant}
        key={variant}
      >
        {args.children || variant}
      </Text>
    ))}
  </>
);

export const Color = (args) => {
  // Index of last valid color in ValidColors array
  const LAST_VALID_COLORS_ARRAY_INDEX = 16;
  return (
    <>
      <BannerAlert
        severity={SEVERITIES.WARNING}
        title="Deprecated"
        description="<Typography/> has been deprecated in favor of the <Text /> component"
        actionButtonLabel="See details"
        actionButtonProps={{
          href: 'https://github.com/MetaMask/metamask-extension/issues/17670',
        }}
      />
      {Object.values(ValidColors).map((color, index) => {
        if (index === LAST_VALID_COLORS_ARRAY_INDEX) {
          return (
            <React.Fragment key={color}>
              <Text
                color={TextColor.textDefault}
                align={TextAlign.Center}
                backgroundColor={BackgroundColor.warningMuted}
                padding={4}
                borderColor={BorderColor.warningDefault}
              >
                DEPRECATED COLORS - DO NOT USE
              </Text>
              <Text
                {...args}
                backgroundColor={renderBackgroundColor(color)}
                color={color}
              >
                <strike>{color}</strike>
              </Text>
            </React.Fragment>
          );
        } else if (index >= LAST_VALID_COLORS_ARRAY_INDEX) {
          return (
            <Text
              {...args}
              backgroundColor={renderBackgroundColor(color)}
              color={color}
              key={color}
            >
              <strike>{color}</strike>
            </Text>
          );
        }
        return (
          <Text
            {...args}
            backgroundColor={renderBackgroundColor(color)}
            color={color}
            key={color}
          >
            {color}
          </Text>
        );
      })}
    </>
  );
};

export const FontWeight = (args) => (
  <>
    <BannerAlert
      severity={SEVERITIES.WARNING}
      title="Deprecated"
      description="<Typography/> has been deprecated in favor of the <Text /> component"
      actionButtonLabel="See details"
      actionButtonProps={{
        href: 'https://github.com/MetaMask/metamask-extension/issues/17670',
      }}
    />
    {Object.values(FONT_WEIGHT).map((weight) => (
      <Text
        backgroundColor={renderBackgroundColor(args.color)}
        {...args}
        fontWeight={weight}
        key={weight}
      >
        {weight}
      </Text>
    ))}
  </>
);

export const FontStyle = (args) => (
  <>
    <BannerAlert
      severity={SEVERITIES.WARNING}
      title="Deprecated"
      description="<Typography/> has been deprecated in favor of the <Text /> component"
      actionButtonLabel="See details"
      actionButtonProps={{
        href: 'https://github.com/MetaMask/metamask-extension/issues/17670',
      }}
    />
    {Object.values(FONT_STYLE).map((style) => (
      <Text
        backgroundColor={renderBackgroundColor(args.color)}
        {...args}
        fontStyle={style}
        key={style}
      >
        {style}
      </Text>
    ))}
  </>
);

export const Align = (args) => (
  <>
    <BannerAlert
      severity={SEVERITIES.WARNING}
      title="Deprecated"
      description="<Typography/> has been deprecated in favor of the <Text /> component"
      actionButtonLabel="See details"
      actionButtonProps={{
        href: 'https://github.com/MetaMask/metamask-extension/issues/17670',
      }}
    />
    {Object.values(TextAlign).map((align) => (
      <Text
        backgroundColor={renderBackgroundColor(args.color)}
        {...args}
        align={align}
        key={align}
      >
        {align}
      </Text>
    ))}
  </>
);

export const OverflowWrap = (args) => (
  <>
    <BannerAlert
      severity={SEVERITIES.WARNING}
      title="Deprecated"
      description="<Typography/> has been deprecated in favor of the <Text /> component"
      actionButtonLabel="See details"
      actionButtonProps={{
        href: 'https://github.com/MetaMask/metamask-extension/issues/17670',
      }}
    />
    <div
      style={{
        width: 250,
        border: '1px solid var(--color-error-default)',
        display: 'block',
      }}
    >
      <Text {...args} overflowWrap={OVERFLOW_WRAP.NORMAL}>
        {OVERFLOW_WRAP.NORMAL}: 0x39013f961c378f02c2b82a6e1d31e9812786fd9d
      </Text>
      <Text {...args} overflowWrap={OVERFLOW_WRAP.BREAK_WORD}>
        {OVERFLOW_WRAP.BREAK_WORD}: 0x39013f961c378f02c2b82a6e1d31e9812786fd9d
      </Text>
    </div>
  </>
);

export const As = (args) => (
  <>
    <BannerAlert
      severity={SEVERITIES.WARNING}
      title="Deprecated"
      description="<Typography/> has been deprecated in favor of the <Text /> component"
      actionButtonLabel="See details"
      actionButtonProps={{
        href: 'https://github.com/MetaMask/metamask-extension/issues/17670',
      }}
    />
    <Text display={DISPLAY.BLOCK} marginBottom={4}>
      You can change the root element of the Typography component using the as
      prop. Inspect the below elements to see the underlying HTML elements
    </Text>
    <Box gap={4}>
      {Object.values(ValidTags).map((as) => (
        <Text
          {...args}
          as={as}
          key={as}
          backgroundColor={renderBackgroundColor(args.color)}
          display={DISPLAY.BLOCK}
        >
          {as}
        </Text>
      ))}
    </Box>
  </>
);

export const Margin = (args) => (
  <>
    <BannerAlert
      severity={SEVERITIES.WARNING}
      title="Deprecated"
      description="<Typography/> has been deprecated in favor of the <Text /> component"
      actionButtonLabel="See details"
      actionButtonProps={{
        href: 'https://github.com/MetaMask/metamask-extension/issues/17670',
      }}
    />
    <Text {...args}>
      This Typography component has a margin of {args.margin * 4}px
    </Text>
  </>
);

Margin.args = {
  margin: 4,
};

export const BoxPropsStory = (args) => (
  <>
    <BannerAlert
      severity={SEVERITIES.WARNING}
      title="Deprecated"
      description="<Typography/> has been deprecated in favor of the <Text /> component"
      actionButtonLabel="See details"
      actionButtonProps={{
        href: 'https://github.com/MetaMask/metamask-extension/issues/17670',
      }}
    />
    <Text
      {...args}
      backgroundColor={BackgroundColor.infoMuted}
      borderColor={BorderColor.infoDefault}
      padding={4}
      borderRadius={4}
    >
      This uses the boxProps prop
    </Text>
  </>
);

BoxPropsStory.args = {
  color: TextColor.textDefault,
  boxProps: {
    backgroundColor: BackgroundColor.infoMuted,
    borderColor: BorderColor.infoDefault,
    padding: 4,
    borderRadius: 4,
  },
};

BoxPropsStory.storyName = 'BoxProps';
