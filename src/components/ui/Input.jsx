import { motion } from 'framer-motion';

export function Input({
  label,
  type = 'text',
  icon: Icon,
  rightElement,
  ...props
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}
        <input
          type={type}
          className={`
            block w-full rounded-md border-gray-300 dark:border-gray-600
            focus:ring-blue-500 focus:border-blue-500
            dark:focus:ring-blue-400 dark:focus:border-blue-400
            dark:bg-gray-700 dark:text-white
            placeholder-gray-400 dark:placeholder-gray-300
            ${Icon ? 'pl-10' : 'pl-4'}
            ${rightElement ? 'pr-10' : 'pr-4'}
            py-2
          `}
          {...props}
        />
        {rightElement && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            {rightElement}
          </div>
        )}
      </div>
    </div>
  );
}