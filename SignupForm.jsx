import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, "Name min 3 chars"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password min 6 chars"),
});

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "22rem" }}>
        <h3 className="text-center mb-3">Sign Up</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="mb-3">
            <input
              {...register("name")}
              placeholder="Name"
              className="form-control"
            />
            {errors.name && (
              <div className="text-danger small">{errors.name.message}</div>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <input
              {...register("email")}
              placeholder="Email"
              className="form-control"
            />
            {errors.email && (
              <div className="text-danger small">{errors.email.message}</div>
            )}
          </div>

          {/* Password */}
          <div className="mb-3">
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              className="form-control"
            />
            {errors.password && (
              <div className="text-danger small">{errors.password.message}</div>
            )}
          </div>

          {/* Button */}
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
