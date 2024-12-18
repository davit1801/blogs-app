/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Controller, FieldError, Control } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { t } from 'i18next';
import { Textarea } from '@/components/ui/textarea';

type ControlledTextareaProps = {
  name: string;
  label: string;
  control: Control<any>;
  rules?: Record<string, any>;
  error?: FieldError;
  className?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const ControlledTextarea: React.FC<ControlledTextareaProps> = ({
  name,
  label,
  control,
  rules,
  error,
  className,
  ...props
}) => {
  console.log(props);
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name} className="block text-sm/6 font-medium">
        {t(label)}
      </Label>

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <Textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className={className}
            {...props}
          />
        )}
      />

      {error && <p className="text-sm text-red-500">{t(`${error.message}`)}</p>}
    </div>
  );
};

export default ControlledTextarea;
