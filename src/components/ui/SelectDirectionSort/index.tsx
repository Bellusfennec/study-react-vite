/* eslint-disable react-hooks/exhaustive-deps */
import { useSearchParams } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import Form from "../../common/Form";
import { useEffect } from "react";
import { Direction } from "../../../types";
import { Group, Radio } from "@mantine/core";

const SelectDirectionSort = () => {
  const [params, serParams] = useSearchParams();
  const query = (
    params.get("sort") === "ASC" || params.get("sort") === "DESC" ? params.get("sort") : "ASC"
  ) as Direction;
  const { formRef, form, handlerChange, handlerSubmit } = useForm({ initial: { sort: query } });

  useEffect(() => {
    if (form.sort) {
      serParams({ sort: form.sort });
    }
  }, [form]);

  return (
    <Form ref={formRef} onSubmit={handlerSubmit} onChange={handlerChange}>
      <Radio.Group label="Сортировка" name="sex">
        <Group mt="xs">
          <Radio value="ASC" name="sort" label="ASC" />
          <Radio value="DESC" name="sort" label="DESC" />
        </Group>
      </Radio.Group>
    </Form>
  );
};

export default SelectDirectionSort;
