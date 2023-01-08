<script setup>


  const patientList = [
    {
      id: 1,
      name: 'Patient 1',
      age: 22,
    },
    {
      id: 2,
      name: 'Patient 2',
      age: 33,
    }
  ]
</script>

<template>
  <div class="outPatientList">
    <h1>This is an 외래환자명단 page</h1>
  </div>

  <table>
    <thead>
      <tr>
        <th>Patient</th>
        <th>age</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="patient in patientList" :key="patient.id">
        <td>{{ patient.name }}</td>
        <td>{{ patient.age }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style>
@media (min-width: 1024px) {

}
</style>
