import http from "@/tools/request.js";

export function getList(data) {
  return http.get('/posts', data)
}
export function postFormData(data) {
  return http.post('https://send.pageclip.co/oLDloEgenkRMGb9ZYDIO4wlarrwjxsBu/Cmerdental', data)
}
export function submitForm(data) {
  return http.post('/api', data)
}