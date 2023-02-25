import { FiSearch } from 'react-icons/fi';

import clsxm from '@/lib/clsxm';

type Props = {
  startAdornment?: React.ReactNode | 'search';
  placeHolder?: string;
  className?: string;
  inputClassName?: string;
} & JSX.IntrinsicElements['input'];

const TextField = ({
  startAdornment,
  className,
  inputClassName,
  placeHolder,
  ...props
}: Props) => {
  return (
    <div className={clsxm(className, 'relative w-full')}>
      <div
        className={clsxm(
          startAdornment && 'pl-4',
          'pointer-events-none absolute inset-y-0 left-0 flex items-center'
        )}
      >
        {startAdornment === 'search' ? (
          <span className='text-gray-500'>
            <FiSearch size={24} />
          </span>
        ) : (
          startAdornment
        )}
      </div>
      <input
        type='text'
        id='main-search'
        className={clsxm(
          inputClassName,
          startAdornment && '!pl-12',
          'w-full rounded-lg border border-gray-300 bg-gray-50 p-3.5 text-sm text-gray-900',
          'focus:border-blue-500 focus:ring-blue-500'
        )}
        placeholder={placeHolder}
        required
        {...props}
      />
    </div>
  );
};

export default TextField;
