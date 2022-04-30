import { css } from "@emotion/react";
import React from "react";
import { ClipLoader } from "react-spinners";
import CustomButton from "../common/custom-button/custom-button.component";
import InputError from "../common/input-error/input-error.component";
import InputFeild from "../common/input-feild/input-feild.component";
import "./new-tasks-form.styles.scss";
import validateTask from "./new-tasks.validate";

class NewTaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      name: "",
      description: "",
      time: "",
      date: "",
      error: {},
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description, time, date } = this.state;

    const { createNewTask } = this.props;

    const result = validateTask({
      name,
      description,
      time,
      date,
    });

    if (result.error) {
      return result.error.details.map((err) => {
        return this.setState({
          error: {
            [err.path]: err.message,
          },
        });
      });
    }

    const timedifference = new Date().getTimezoneOffset() * 60 * 1000;
    const timeInputs = new Date(`${date}T${time}:00.000Z`).getTime();

    const timeOfTask = new Date(timeInputs + timedifference);

    console.log(timeOfTask);

    if (Date.now() > timeOfTask.getTime()) {
      return this.setState({
        error: {
          time: "Task time must be in the future",
        },
      });
    }

    if (timeOfTask.getTime() > Date.now() + 2628000000 ) {
      return this.setState({
        error: {
          time: "Task time must be within a month",
        },
      });
    }

    this.setState({ error: {}, loading: true });

    await createNewTask({
      name: name.trim(),
      description: description.trim(),
      timeOfTask: timeOfTask.toISOString(),
    });

    document.location = "/";
  };

  render() {
    const { name, description, time, date, error, loading } = this.state;

    const today = new Date().toISOString().split("T")[0];

    return (
      <div className="new-task">
        {loading ? <Loader /> : null}

        <form className="new-task-form" onSubmit={this.handleSubmit}>
          <InputFeild
            name="name"
            value={name}
            label={"Name Of Task"}
            handleChange={this.handleChange}
            error={error.name}
          />
          <div className="input-feild-container">
            <textarea
              className="input-feild"
              placeholder="Task Description"
              name="description"
              onChange={this.handleChange}
              value={description}
              cols="30"
              rows="5"
            ></textarea>
            {error.description ? (
              <InputError error={error.description} />
            ) : null}
          </div>

          <InputFeild
            type="date"
            name="date"
            min={today}
            value={date}
            label={"Date"}
            handleChange={this.handleChange}
            error={error.date}
          />
          <InputFeild
            type="time"
            name="time"
            value={time}
            label={"Time"}
            handleChange={this.handleChange}
            error={error.time}
          />
          <CustomButton
            label={"Create New task"}
            size={"small"}
            type="submit"
          />
        </form>
      </div>
    );
  }
}

export default NewTaskForm;

const Loader = (loading) => {
  const override = css`
    display: block;
    margin: 0 auto;
  `;
  return (
    <div className="loading-screen">
      <ClipLoader
        color={"var(--color-heading)"}
        loading={loading}
        css={override}
        size={50}
      />
    </div>
  );
};
