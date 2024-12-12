import ControlledInput from '@/components/inputs/ControlledInput';
import ControlledTextarea from '@/components/inputs/ControlledTextarea';
import { Button } from '@/components/ui/button';
import { userAtom } from '@/store/auth';
import { createBlog } from '@/supabase/blogs';
import { WriteBlogFormValues } from '@/supabase/blogs/index.types';
import { useMutation } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const WriteBlogForm: React.FC = () => {
  const [user] = useAtom(userAtom);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { control, handleSubmit, reset } = useForm<WriteBlogFormValues>({
    defaultValues: {
      title_ka: '',
      title_en: '',
      description_ka: '',
      description_en: '',
      image_file: null,
    },
  });

  const { mutate, isPending, isError } = useMutation({
    mutationKey: ['create-blog'],
    mutationFn: createBlog,
    onSuccess: () => {
      alert(t('write.onSuccess'));
      navigate('/');
      reset();
    },
  });

  const onSubmit = (inputFields: WriteBlogFormValues) => {
    if (user) {
      const userId = user.user.id;
      mutate({ inputFields, userId });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 p-8 shadow-md"
    >
      <ControlledInput
        control={control}
        name="title_ka"
        label="write.title-ka"
      />
      <ControlledInput
        control={control}
        name="title_en"
        label="write.title-en"
      />
      <ControlledTextarea
        control={control}
        name="description_ka"
        label="write.description-ka"
      />
      <ControlledTextarea
        control={control}
        name="description_en"
        label="write.description-en"
      />

      <ControlledInput
        control={control}
        name="image_file"
        label="write.image"
        type="file"
      />

      {isError && (
        <p className="font-semibold text-red-500">{t('write.onError')}</p>
      )}

      <Button className="self-end" disabled={isPending}>
        {t('write.button')}
      </Button>
    </form>
  );
};

export default WriteBlogForm;
