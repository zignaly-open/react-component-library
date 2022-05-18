// Dependencies
import * as React from "react";
import { ReactElement, useState, useRef, useCallback } from "react";
import { useClickAway } from "react-use";

// Styled Components
import {
  Layout,
  Item,
  ArrowContainer,
  Menu,
  Label,
  Value,
  Placeholder,
  Arrow,
  LeftElement,
  ItemCaption,
  LeftElementIcon,
  Container,
  ItemContainer
} from "./styles";

// Assets
import CaretDownIcon from "assets/icons/caret-down-icon.svg?url";

// Types
import { OptionItem, SelectProps, SelectSizes } from "./types";

function Select({
  name,
  mode,
  label,
  fullWidth,
  className,
  value = null,
  options = [],
  disabled = false,
  placeholder = "Button",
  onChange = () => {},
  size = SelectSizes.NORMAL,
}: SelectProps): ReactElement {
  // Ref
  const selectorRef = useRef(null);

  // Hooks
  const [isActiveMenu, setMenuActive] = useState(false);

  /**
   * @function handleClickItem():
   * @description Handle select change form component.
   */
  const handleClickItem = useCallback(
    (value: OptionItem, index: number) => {
      onChange({...value, index});
      setMenuActive(false);
    },
    [options],
  );

  useClickAway(selectorRef, () => {
    setMenuActive(false);
  });

  return (
    <Layout
      size={size}
      name={name}
      ref={selectorRef}
      disabled={disabled}
      className={className}
      fullWidth={fullWidth}
      isActiveMenu={isActiveMenu}
      collapsed={mode === "collapsed" && !isActiveMenu}
    >
      {label && <Label htmlFor={name}>{label}</Label>}
      <Container onClick={() => setMenuActive(!isActiveMenu)}>
        {mode !== "collapsed" &&
          (value ? (
            <>
              {value.leftElement && (
                <LeftElement>
                  {typeof value.leftElement === "object" ? (
                    value.leftElement
                  ) : (
                    <LeftElementIcon src={value.leftElement} alt={value.caption} />
                  )}
                </LeftElement>
              )}
              <Value variant={'body'}>{value.caption}</Value>
            </>
          ) : (
            <Placeholder>{placeholder}</Placeholder>
          ))}
        <ArrowContainer>
          <Arrow src={CaretDownIcon} alt={label} />
        </ArrowContainer>
      </Container>
      <Menu>
        {!options.length ? (
          <Item empty={true}>
            <ItemCaption>No data available</ItemCaption>
          </Item>
        ) : (
          options.map((option: OptionItem, index: number) => {
            const isSelectedOption = !!(value && value.index === index);

            if (isSelectedOption)
              return null;

            return (
              <Item
                key={`--${index.toString()}`}
                onClick={() => handleClickItem(option, index)}
              >
                <ItemContainer>
                  {option.leftElement && (
                    <LeftElement>
                      {typeof option.leftElement === "object" ? (
                        option.leftElement
                      ) : (
                        <LeftElementIcon src={option.leftElement} alt={option.caption} />
                      )}
                    </LeftElement>
                  )}
                  <ItemCaption variant={'body1'}>{option.caption}</ItemCaption>
                </ItemContainer>
              </Item>
            );
          })
        )}
      </Menu>
    </Layout>
  );
}

export default Select;
