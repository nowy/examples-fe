import { z } from 'zod';
import { publicProcedure, router } from '../../trpc';

const MOCK_USER = {
  id: '123',
  name: 'Frank Reynolds',
  editableField: 'Some editable field',
};

const byId = publicProcedure.input(z.string()).query(() => {
  return MOCK_USER;
});

const list = publicProcedure.query(() => {
  return [MOCK_USER];
});

const update = publicProcedure
  .input(
    z.object({
      editableField: z.string(),
    })
  )
  .mutation((opts) => {
    const editableField = opts.input.editableField;
    MOCK_USER.editableField = editableField;

    return MOCK_USER;
  });

export const userRouter = router({
  byId,
  list,
  update,
});
