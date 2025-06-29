'use client';
import { ButtonProps, Link as ChakraLink, useStyleConfig } from '@chakra-ui/react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

type LinkProps = ButtonProps & NextLinkProps;

function Link({ href, children, ...props }: LinkProps) {
  const buttonStyles = useStyleConfig('Button', { variant: 'a' });

  return (
    <ChakraLink as={NextLink} href={href} __css={buttonStyles} {...props}>
      {children}
    </ChakraLink>
  );
}

export default Link;