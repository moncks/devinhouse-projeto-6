package br.com.devinhouse.grupo04.controller;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.devinhouse.grupo04.dto.InteressadoDTOInput;
import br.com.devinhouse.grupo04.dto.InteressadoDTOOutput;
import br.com.devinhouse.grupo04.entity.Interessado;
import br.com.devinhouse.grupo04.mapper.InteressadoMapper;
import br.com.devinhouse.grupo04.service.InteressadoService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(value = "/v1" + "/interessados")
@Api(value="API Rest Interessados")
public class InteressadoController {

	@Autowired
	private InteressadoMapper interessadoMapper;
	
	@Autowired
	private InteressadoService service;

	@PostMapping(produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(code = HttpStatus.CREATED)
	@ApiOperation(value="Cria um novo interessado")
	public InteressadoDTOOutput create(@Valid @RequestBody InteressadoDTOInput interessadoDTO) {
		Interessado interessado = service.create(interessadoMapper.toInteressado(interessadoDTO));

		return interessadoMapper.toDto(interessado);
	}

	@GetMapping(produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(code = HttpStatus.OK)
	@ApiOperation(value="Retorna todos os interessados salvos")
	public List<InteressadoDTOOutput> findAll(@RequestParam(required = false) String nu_identificacao) {
		List<Interessado> interessados = service.findAll(nu_identificacao);

		return interessadoMapper.toDto(interessados);
	}

	@GetMapping(value = "/{id}", produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(code = HttpStatus.OK)
	@ApiOperation(value="Retorna o interessado do id informado")
	public InteressadoDTOOutput find(@PathVariable long id) {
		Interessado interessado = service.find(id);

		return interessadoMapper.toDto(interessado);
	}

	@PutMapping(value = "/{id}", produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	@ApiOperation(value="Atualiza o interessado desejado")
	public void update(@PathVariable Long id, @RequestBody InteressadoDTOInput interessadoDTO) {
		service.update(id, interessadoMapper.toInteressado(interessadoDTO));
	}

	@DeleteMapping(value = "/{id}", produces = APPLICATION_JSON_VALUE)
	@ResponseBody
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	@ApiOperation(value="Deleta o interessado desejado")
	public void delete(@PathVariable Long id) {
		service.delete(id);
	}

}
