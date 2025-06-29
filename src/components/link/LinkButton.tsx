'use client';
import { ButtonProps, Link as ChakraLink, useStyleConfig } from '@chakra-ui/react';
import NextLink, { LinkProps } from 'next/link';

type ChakraAndNextProps = ButtonProps & LinkProps;

export default function LinkButton({
  href,
  children,
  prefetch = true,
  ...props
}: ChakraAndNextProps) {
  const buttonStyles = useStyleConfig('Button', { variant: 'a' });

  return (
    <ChakraLink as={NextLink} href={href} prefetch={prefetch} __css={buttonStyles} {...props}>
      {children}
    </ChakraLink>
  );
}