interface RolsProps {
  roles: string[];
}

export default function Rols({ roles }: RolsProps) {
  return (
    <div className="roles-container  text-[12px] flex flex-wrap gap-5 ">
      {Array.isArray(roles) ? (
        roles.map((role, index) => (
          <div key={index} className="role-item border py-[6px] px-[20px] ">
            {role}
          </div>
        ))
      ) : (
        <p>No roles available</p>
      )}
      
    </div>
  );
}
