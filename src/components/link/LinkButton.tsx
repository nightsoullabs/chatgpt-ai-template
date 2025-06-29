'use client';
import Link from 'next/link';
import { ButtonProps, Link as ChakraLink, useStyleConfig } from '@chakra-ui/react';
import { LinkProps } from 'next/link';

type ChakraAndNextProps = ButtonProps & LinkProps;

export default function LinkButton({
  href,
  children,
  prefetch = true,
  ...props
}: ChakraAndNextProps) {
  const buttonStyles = useStyleConfig('Button', { variant: 'a' });

  return (
    <Link href={href} prefetch={prefetch} passHref legacyBehavior>
      <ChakraLink __css={buttonStyles} {...props}>
        {children}
      </ChakraLink>
    </Link>
  );
}