import { SVGProps } from 'react';

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width='1em' height='1em' viewBox='0 0 386 386' fill='none' {...props}>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M374.5 323.6L243.9 193L374.5 62.4C388.6 48.3 388.6 25.6 374.5 11.5C360.4 -2.59995 337.7 -2.59995 323.6 11.5L193 142.1L62.3998 11.5C48.2998 -2.59995 25.5998 -2.59995 11.4998 11.5C-2.6002 25.6 -2.6002 48.3 11.4998 62.4L142.1 193L11.4998 323.6C-2.6002 337.7 -2.6002 360.4 11.4998 374.5C25.5998 388.6 48.2998 388.6 62.3998 374.5L193 243.9L323.6 374.5C337.7 388.6 360.4 388.6 374.5 374.5C388.5 360.4 388.5 337.6 374.5 323.6Z'
        fill='black'
      />
    </svg>
  );
}
