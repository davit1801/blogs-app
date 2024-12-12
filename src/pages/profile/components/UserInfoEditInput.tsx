import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { userProfileTypes } from '@/supabase/profile/index.types';
import { UseFormRegister } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type PropsType = {
  inputName: 'avatar_url' | 'full_name_en' | 'full_name_ka' | 'phone_number';
  profile: userProfileTypes;
  register: UseFormRegister<userProfileTypes>;
  label: string;
};

const UserInfoEditInput: React.FC<PropsType> = ({
  inputName,
  label,
  register,
  profile,
}) => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="fullname_ka" className="text-right">
        {t(`${label}`)}
      </Label>
      <Input
        id={inputName}
        {...register(inputName, { value: profile[inputName] })}
        className="col-span-3"
      />
    </div>
  );
};

export default UserInfoEditInput;
