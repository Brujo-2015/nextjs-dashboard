import { CheckIcon, ClockIcon,   DocumentIcon, ExclamationTriangleIcon, } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function InvoiceStatus({ status }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-blue-100 text-blue-700': status === 'draft',
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
          'bg-red-500  text-white': status === 'late',
          'bg-red-700  text-white': status === 'overdue',
        },
      )}
    >
      {status === 'draft' ? (
        <>
          Draft
          <DocumentIcon className="ml-1 w-4 text-blue-700" />
        </>
      ) : null}
      {status === 'pending' ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          Paid
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'late' ? (
        <>
          Late
          <ClockIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      {status === 'overdue' ? (
        <>
          Overdue
          <ExclamationTriangleIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
