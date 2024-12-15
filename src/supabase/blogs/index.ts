import { supabase } from '@/supabase';
import { createBlogPayload } from '@/supabase/blogs/index.types';

export const createBlog = async ({
  inputFields,
  userId,
}: createBlogPayload) => {
  try {
    if (inputFields?.image_file) {
      const uploadResponse = await supabase.storage
        .from('blog_images')
        .upload(inputFields?.image_file?.name, inputFields?.image_file);

      if (uploadResponse.error) {
        throw new Error(`Image upload failed: ${uploadResponse.error.message}`);
      }

      const imageUrl = uploadResponse.data?.fullPath;

      const insertResponse = await supabase.from('blogs').insert({
        title_ka: inputFields.title_ka,
        title_en: inputFields.title_en,
        description_ka: inputFields.description_ka,
        description_en: inputFields.description_en,
        image_url: imageUrl,
        user_id: userId,
      });

      if (insertResponse.error) {
        throw new Error(
          `Blog creation failed: ${insertResponse.error.message}`,
        );
      }

      return uploadResponse;
    } else {
      throw new Error('No image file provided in inputFields.');
    }
  } catch (error) {
    console.log('Error creating blog');
    throw error;
  }
};

export const getBlogs = async (searchText: string) => {
  try {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .or(`title_en.ilike.%${searchText}%,title_ka.ilike.%${searchText}%`)
      .throwOnError();

    if (error) throw error;

    return data;
  } catch (err) {
    console.error('Error fetching blogs:', err);
    throw err;
  }
};
