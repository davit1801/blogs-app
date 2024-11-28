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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FaRegEdit } from 'react-icons/fa';
import { useAtomValue, useSetAtom } from 'jotai';
import { userAtom } from '@/store/auth';
import { useMutation } from '@tanstack/react-query';
import { fillProfileInfo } from '@/supabase/profile';
import { useTranslation } from 'react-i18next';
import { userProfileAtom } from '@/store/profile';
import { SubmitHandler, useForm } from 'react-hook-form';
import { userProfileTypes } from '@/supabase/profile/index.types';

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
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="fullname_ka" className="text-right">
                სახელი გვარი
              </Label>
              <Input
                id="full_name_ka"
                {...register('full_name_ka', { value: profile?.full_name_ka })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="fullname_en" className="text-right">
                Full name
              </Label>
              <Input
                id="full_name_en"
                {...register('full_name_en', { value: profile?.full_name_en })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="avatar_url" className="text-right">
                {t('profile.avatar-url')}
              </Label>
              <Input
                id="avatar_url"
                {...register('avatar_url', { value: profile?.avatar_url })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone_number" className="text-right">
                {t('profile.phone-number')}
              </Label>
              <Input
                id="phone_number"
                {...register('phone_number', {
                  value: profile?.phone_number,
                })}
                className="col-span-3"
              />
            </div>
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
