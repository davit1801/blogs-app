/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Controller, FieldError, Control } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useTranslation } from 'react-i18next';

type ControlledInputProps = {
  name: string;
  label: string;
  control: Control<any>;
  type?: string;
  rules?: Record<string, any>;
  error?: FieldError;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const ControlledInput: React.FC<ControlledInputProps> = ({
  name,
  label,
  control,
  type = 'text',
  rules,
  error,
  className,
  ...props
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name} className="block text-sm/6 font-medium">
        {t(label)}
      </Label>

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => {
          return type === 'file' ? (
            <Input
              id={name}
              name={name}
              className={className}
              type="file"
              onChange={(e) => {
                const file = e.target.files?.[0];
                onChange(file);
              }}
              {...props}
            />
          ) : (
            <Input
              id={name}
              name={name}
              type={type}
              value={value}
              onChange={onChange}
              className={className}
              {...props}
            />
          );
        }}
      />

      {error && <p className="text-sm text-red-500">{t(`${error.message}`)}</p>}
    </div>
  );
};

export default ControlledInput;
