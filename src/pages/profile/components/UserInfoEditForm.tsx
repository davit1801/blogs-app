import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { FaRegEdit } from 'react-icons/fa';
import { useAtomValue, useSetAtom } from 'jotai';
import { userAtom } from '@/store/auth';
import { useMutation } from '@tanstack/react-query';
import { fillProfileInfo } from '@/supabase/profile';
import { useTranslation } from 'react-i18next';
import { userProfileAtom } from '@/store/profile';
import { SubmitHandler, useForm } from 'react-hook-form';
import { userProfileTypes } from '@/supabase/profile/index.types';
import UserInfoEditInput from '@/pages/profile/components/UserInfoEditInput';

type UserInfoEditFormProps = {
  profile: userProfileTypes;
};

const UserInfoEditForm: React.FC<UserInfoEditFormProps> = ({ profile }) => {
  const { t } = useTranslation();
  const user = useAtomValue(userAtom);
  const setProfile = useSetAtom(userProfileAtom);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { register, handleSubmit } = useForm<userProfileTypes>();

  const { mutate } = useMutation({
    mutationKey: ['profile-info'],
    mutationFn: fillProfileInfo,
    onSuccess: () => {
      setIsDialogOpen(false);
    },
  });

  const handleFormSubmit: SubmitHandler<userProfileTypes> = (inputFields) => {
    if (user) {
      mutate({ ...inputFields, id: user?.user.id });
    }

    setProfile((prevValue) => {
      return { ...prevValue, ...inputFields };
    });
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger>
        <FaRegEdit className="cursor-pointer text-2xl" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t('profile.edit-profile')}</DialogTitle>
          <DialogDescription>{t('profile.dialog-title')}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="grid gap-4 py-4">
            <UserInfoEditInput
              inputName="full_name_ka"
              profile={profile}
              register={register}
              label="profile.full_name_ka"
            />
            <UserInfoEditInput
              inputName="full_name_en"
              profile={profile}
              register={register}
              label="profile.full_name_en"
            />
            <UserInfoEditInput
              inputName="avatar_url"
              profile={profile}
              register={register}
              label="profile.avatar-url"
            />
            <UserInfoEditInput
              inputName="phone_number"
              profile={profile}
              register={register}
              label="profile.phone-number"
            />
          </div>
          <DialogFooter>
            <Button type="submit">{t('profile.save-btn')}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UserInfoEditForm;
